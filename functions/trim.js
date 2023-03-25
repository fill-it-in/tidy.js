export function trim(input) {
    return input.replace(/[^a-zA-Z-z0-9 ]/g, ""); // Removes every special character from input.
}