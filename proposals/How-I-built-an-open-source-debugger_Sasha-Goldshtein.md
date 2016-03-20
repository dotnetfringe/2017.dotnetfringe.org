How I Built An Open-Source Debugger
========================

* Speaker   : Sasha Goldshtein
* Available : All conference days 
* Length    : 30-60 minutes

Description
-----------

About a year ago, I set out to build an open-source command line debugger for .NET applications. Why would I do such a thing? Well, first it turns out that in some scenarios, you really can't use Visual Studio -- when you're on a production box, for example. What about WinDbg, then? Even if you're OK with WinDbg, which few people are, it has a fairly arcane syntax even for simple things, and it can't be easily extended with .NET code. And finally, there are some really cool things that a debugger can do with the Microsoft CLRMD library, which provides a .NET API to the internals of the CLR heap, execution engine, threads, and call stacks. Thus, [msos](https://github.com/goldshtn/msos) was born -- a purely managed, command-line debugger that has a bunch of innovative commands. Innovative commands? Yes, like heap queries that filter and print heap objects based on their contents; like automatic deadlock analysis (with support for unmanaged synchronization mechanisms coming soon); like a simple to use system for analyzing a bunch of dump files and getting a quick triage result. In this talk, I will share how I built msos, and show how some of its cool features can be used to solve complex bugs easier than ever before.

---------------

Speaker Bio
-----------

Sasha Goldshtein is the CTO of Sela Group, a Microsoft C# MVP and Azure MRS, a Pluralsight author, and an international consultant and trainer focusing on performance optimization, distributed systems, and production debugging. Sasha is the author "Pro .NET Performance" (Apress 2012), a popular blog, and numerous training courses on .NET and beyond. He contributes to a number of open source projects, most recently to IO Visor's [bcc](https://github.com/iovisor/bcc).

Links
-----

* Blog: http://blog.sashag.net
* Company: http://www.selagroup.com
* Github: https://github.com/goldshtn
* Twitter: https://twitter.com/goldshtn
