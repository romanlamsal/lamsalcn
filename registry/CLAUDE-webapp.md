- when adding new shadcn components, always use `pnpx shadcn@latest`, e.g. `pnpx shadcn@latest add button`
- when planning the component structure, first call `pnpx shadcn@latest list @shadcn` to check if there are suitable shadcn components. prefer those.
- when connecting to a SSE event source, use the hook in `./src/lib/use-sse-source.ts`
- when creating complex element trees, favor radix-style component structures over multiple if-else code for a cleaner solution
- after finishing your implementations, run `pnpm run lint` and `pnpm tsc --noEmit`, do not build.
  - if you created tests for the current task, also run those tests via `vitest`

# Testing

- tests for files in ./src should be placed at the exact same path but in ./test, e.g. the test file for `./src/lib/foo/bar.ts` should be `./test/lib/foo/bar.test.ts`
- vitest is the test framework used in this repo and must always be imported (not available as global)
- each test should have
  - three comments "given", "when", "then" 
  - `it("should xyz...")` description
  - most of the time exactly ONE operation in the WHEN, seldomly two. Prefer `it.each([/* ... */] as const)`.
  - most of the time exactly ONE assertion in the THEN, seldomly two. Prefer `it.each([/* ... */] as const)`.

E.g.:
```ts
it("should return null", () => {
    // given
    /* multiple lines of setup */
    
    // when
    /* one thing that happens */
    
    // then
    /* asserting one thing */
})
```
