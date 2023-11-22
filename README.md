# Code Coverage - A dissection of coverage metrics

Tests explained

add1 - pass, no assertion

add2 - pass, assertion, bug in application code

add3 - pass, assertion, but in test code

jpgcheck - green, 100% line coverage but only 50% branch coverage

hello1 - green, 100% line coverage but only 50% branch coverage, uncomment for 100 % branch coverage

hello2 - code rewritten to increase line coverage (compared to hello1)

hello3 - uncomment to get NPE

hello4 - assert for NPE, note that coverage does not increase although we just added a new test case

loop1, loop2 - compare loop1 and loop2 and you will see changes in statement coverage (this is a javascript variable scope issue)

conditions - all is 100% although the condition i<0 is never covered. This is jest trying to do condition coverage (still calling it branch coverage), but failing.

fullcov - dead code, put it all on one line and enjoy 100% line coverage