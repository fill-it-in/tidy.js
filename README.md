# tidy.js
🧹 tidy.js filters strings for swearing, harassment, URLs, advertising and more.

*The `blacklist.json` file can be outdated!*

## scan(String) function:
Scans String for blacklisted words.
```js
scan('ass');
// Returns true
scan('Hello');
// Returns false
```

## check(String) function:
Checks String for blacklisted TLDs.
```js
check('github.com');
// Returns true
check('github');
// Returns false
```

## censor(String, int) function:
Removes either only blacklisted words/TLDs or both from String. 
```js
censor('fooass', 1);
// Returns 'foo'
censor('foo.com', 2);
// Returns 'foo'
censor('fooassbar.com', 3);
// Returns 'foobar'
```

## License
MIT
