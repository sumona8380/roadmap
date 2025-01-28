# Variable
A variable is like a container that holds data that can be reused or updated later in the program

# Rules for Naming Variables

* must begin with letter/underscore/$
* subsequent characters can be letter/number/underscore/$
* case sensitive (age & Age are different)
* can't use reserved keywords
* use is or has as prefixes for booleans
* letter case
    * camel case - function, class, methods
    * uppercase - constant (non changing variables)
    * pascal case - components (of framework like react)
    * underscore - private variables or functions
    * camel case - mutable global variables
    * uppercase - immutable global variables

# Var, Let, Const

* **const** - if the value should not be changed
* **let** - if we want mutable value or we can not use const
* **var** - only if we support old browser.  

| Property | var | let | const |
| -------- | ------- | -------- | ------- |
| Scope | Function scoped | Block scoped | Block scoped |
| Update | Mutable | Mutable | Immutable |
| Redeclaration | Can be redeclared | Can't be redeclared | Can't be redeclared |
| Hoisting | Hoisted at top | Hoisted at top | Hoisted at top |
| Support | Supported in the old version of browser | Not supported in the old version of the browser | Not supported in the old version of the browser |

# [JS File](/code/variable.js)