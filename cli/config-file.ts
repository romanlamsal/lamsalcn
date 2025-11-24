import type { PackageManager } from "./package-manager"

export const CONFIG_FILENAME = "lamsal-kit.json"

export type LamsalcnConfig = {
    packageManager: PackageManager
    srcDirectory: string
}
