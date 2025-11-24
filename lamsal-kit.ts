#! /usr/bin/env node

import process from "node:process"

if (process.argv[2] === "init") {
    await import("./cli/init")
}

if (process.argv[2] === "add") {
    await import("./cli/add")
}
