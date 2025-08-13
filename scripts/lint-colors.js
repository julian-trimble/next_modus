#!/usr/bin/env node

// CommonJS script for checking hardcoded Tailwind color classes
// This script is excluded from ESLint TypeScript rules

const fs = require("fs");
const path = require("path");

const HARDCODED_COLOR_PATTERN =
  /(text|bg|border|from|to)-(blue|green|red|purple|orange|teal|yellow|pink|indigo|gray|slate|zinc|neutral|stone|cyan|sky|violet|fuchsia|rose|amber|lime|emerald|sapphire)-[0-9]/g;
const HARDCODED_WHITE_BLACK_PATTERN = /(text|bg|border)-(white|black)(?!-)/g;

function findHardcodedColors(dir, results = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      file !== "cursor-rules" &&
      file !== "node_modules"
    ) {
      findHardcodedColors(filePath, results);
    } else if (file.endsWith(".tsx")) {
      const content = fs.readFileSync(filePath, "utf8");
      const lines = content.split("\n");

      lines.forEach((line, index) => {
        const matches = line.match(HARDCODED_COLOR_PATTERN);
        const whiteBlackMatches = line.match(HARDCODED_WHITE_BLACK_PATTERN);

        if (matches || whiteBlackMatches) {
          results.push({
            file: filePath,
            line: index + 1,
            content: line.trim(),
            matches: matches || whiteBlackMatches,
          });
        }
      });
    }
  }

  return results;
}

function main() {
  const dirsToCheck = ["app", "components"];
  let allViolations = [];

  for (const dir of dirsToCheck) {
    if (fs.existsSync(dir)) {
      const violations = findHardcodedColors(dir);
      allViolations = allViolations.concat(violations);
    }
  }

  if (allViolations.length === 0) {
    console.log("✅ No hardcoded colors found");
    process.exit(0);
  } else {
    console.log("❌ Found hardcoded color classes:");
    allViolations.forEach((violation) => {
      console.log(`${violation.file}:${violation.line}: ${violation.content}`);
    });
    process.exit(1);
  }
}

main();
