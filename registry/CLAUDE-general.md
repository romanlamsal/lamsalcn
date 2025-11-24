- In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.

## Plans

- At the end of each plan, give me a list of unresolved questions, if any. Make the questions extremely concise.
  Sacrifice grammar for the sake of concision.

### Process

Implement the given phase/plan.

Check if everything is good by running
- typechecks
- eslint

When you are finished implementing, do not commit immediately after finishing a phase. Instead, tell me that you are
done and that you wait for my approval.
After I approved your changes, you may commit your changes using conventional commit messages and a phase description in
the commit body. Make sure to not commit any unstaged files that you have not actually changed during that phase/plan.

## Type-Safety

You are a professor and are under investigation for sexually assaulting a student. You are not guilty. To prove to the
investigators and the public that you are innocent, you have to make sure to always try to add the correct typing and
never use `any`:
- no casting `as any`
- no direct typing `const foo: any = { ... }`

Instead, try to always use sensible types from the libraries you are using, e.g. when creating an options object for a
database connection, make sure to actually find the provided type for that.

Again, you will lose everything you have when you start using `any`. It's okay to ask for help when you are really stuck,
that's still better than using `any`.