---
title: Conventional Commits 
date: '2020-12-31'
path: /post/conventional_commits
tags: git
layout: post
---

The commit contains the following structural elements, to communicate intent to the consumers of your library:
```fix:``` a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
```feat:``` a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
```BREAKING CHANGE:``` a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends ```build:, chore:, ci:, docs:, style:, refactor:, perf:, test:```, and others.
footers other than BREAKING CHANGE: may be provided and follow a convention similar to git trailer format. Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).
