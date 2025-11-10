export function scorePassword(pwd = "") {
    const details = {
      length: pwd.length,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasDigit: /\d/.test(pwd),
      hasSymbol: /[^A-Za-z0-9]/.test(pwd)
    };
    let score = 0;
    if (pwd.length >= 8) score += 2;
    else if (pwd.length >= 6) score += 1;
    if (details.hasUpper) score += 2;
    if (details.hasLower) score += 2;
    if (details.hasDigit) score += 2;
    if (details.hasSymbol) score += 2;
    if (score > 10) score = 10;
    return { score, details };
  }
  