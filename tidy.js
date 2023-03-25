import { trim } from "./functions/trim.js";
import blacklist from "./json/blacklist.json" assert { type: 'json' };
import tlds from "./json/tlds.json" assert { type: 'json' };

export function scan(input) { // Scans input for blacklisted words.
    var result = false; // Initializes base result as false
    for (let i = 0; i < blacklist.word.length; i++) { // Runs trough the blacklist to check for matching words
        if (trim(input).includes(blacklist.word[i])) { // If a blacklisted word is found...
            result = true;                            // the result gets changed to true.
        }
    }
    return result; // Returns true when a blacklisted word is found, returns false when no blacklisted word is found.
}

export function check(input) { // Scans input for blacklisted TLDs.
    var result = false; // Initializes base result as false.
    for (let i = 0; i < tlds.tld.length; i++) { // Runs trough the list of blacklisted TLDs to check for matching TLDs.
        if (input.includes('.' + tlds.tld[i]) || input.includes(',' + tlds.tld[i])) { // If a blacklisted TLD is found...
            result = true;                                                           // the result gets changed to true.
        }
    }
    return result; // Returns true when a blacklisted TLD is found, returns false when no blacklisted TLD is found.
}

export function censor(input, type) { // Censors input depending on the type selected.
    var result = input; // Initializes base result as input.
    if (type === undefined | type === 0 | type > 3) return 'Warning! The censor() function type equals undefined or is out of range!'; // Returns a warning when censor type is undefined or out of range. (Debug)
    if (type === 1) { // Censors blacklisted words in input.
        for (let i = 0; i < blacklist.word.length; i++) { // Runs trough the blacklist to check for matching words
            if (trim(input).includes(blacklist.word[i])) {             // If a blacklisted word is found...
                result = trim(result).replace(blacklist.word[i], ''); // the blacklisted word will be removed from the result.
            }
        }
        return result; // Returns the censored result.
    }
    if (type === 2) { // Censors blacklisted TLDs in input.
        for (let i = 0; i < tlds.tld.length; i++) { // Runs trough the list of blacklisted TLDs to check for matching TLDs.
            if (input.includes(tlds.tld[i])) {                   // If a blacklisted TLD is found...
                result = trim(result).replace(tlds.tld[i], ''); // the blacklisted TLD will be removed from the result.
            }
        }
        return result; // Returns the censored result.
    }
    if (type === 3) { // Censors blacklisted words & TLDs in input.
        for (let i = 0; i < blacklist.word.length; i++) { // Runs trough the blacklist to check for matching words
            if (trim(result).includes(blacklist.word[i])) {            // If a blacklisted word is found...
                result = trim(result).replace(blacklist.word[i], ''); // the blacklisted word will be removed from the result.
            }
        }
        for (let i = 0; i < tlds.tld.length; i++) { // Runs trough the list of blacklisted TLDs to check for matching TLDs.
            if (result.includes(tlds.tld[i])) {            // If a blacklisted TLD is found...
                result = result.replace(tlds.tld[i], ''); // the blacklisted TLD will be removed from the result.
            }
        }
        return result; // Returns the censored result.
    }
}