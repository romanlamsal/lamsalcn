import type { RegistryEntry } from "../registry"

export function compareDeps(
    { dependencies = [], devDependencies = [] }: RegistryEntry,
    {
        dependencies: currentDependencies = {},
        devDependencies: currentDevDependencies = {},
    }: {
        dependencies?: Record<string, string>
        devDependencies?: Record<string, string>
    },
): { name: string; nextVersion: string; conflict: boolean; dev: boolean }[] {
    const parseVersion = (version: string) => {
        const [modifier, major = "0", minor = "0", patch = "0"] =
            version.match(/(\D*)(\d)+\.(\d)+\.(\d)+.*/)?.slice(1) ?? []

        if (!modifier) {
            return
        }

        const precision =
            {
                "~": "patch",
                "^": "minor",
            }[modifier] ?? "major"

        return {
            precision,
            major,
            minor,
            patch,
        }
    }

    return [...dependencies, ...devDependencies].map((dep, index) => {
        const [name, nextVersion = "latest"] = dep.split("@") as [string, string | undefined]
        const stats = { name, nextVersion, conflict: false, dev: index >= dependencies.length }

        return stats
    })
}

export function getConflictingDeps(
    config: RegistryEntry,
    packageJson: {
        dependencies?: Record<string, string>
        devDependencies?: Record<string, string>
    },
    key: keyof typeof packageJson,
) {
    return config[key]?.reduce(
        (acc, curr) => {
            const [name, version = "latest"] = curr.split("@") as [string, string]

            const currentVersion = {
                ...packageJson.dependencies,
                ...packageJson.devDependencies,
            }[name]?.replace(/^\D*/g, "")

            if (!currentVersion) {
                return acc
            }

            if (version === "latest") {
                acc.push({ name, current: currentVersion, next: version })
                return acc
            }

            // parse semantic versioning
            const currentMajor = currentVersion.split(".")[0]!
            const nextMajor = version.split(".")[0]

            if (currentMajor !== nextMajor) {
                acc.push({ name, current: currentVersion, next: version })
            }

            return acc
        },
        [] as { name: string; current: string; next: string }[],
    )
}
