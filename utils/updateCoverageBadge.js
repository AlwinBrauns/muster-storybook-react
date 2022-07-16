const path = require("path");
const fs = require("fs");

function getColor(coverage) {
    if (coverage < 60) {
        return 'red'
    }
    if (coverage < 80) {
        return 'yellow'
    }
    if (coverage < 90) {
        return 'green'
    }
    return 'brightgreen'
}

(function updateCoverageBadge() {
    const file = path.join(__dirname, "../coverage/coverage-summary.json")
    const coverage = require(file).total.statements.pct
    const color = getColor(coverage)
    const badge = `![code-coverage-badge](https://img.shields.io/badge/coverage-${coverage}%25-${color})`
    let readme = fs.readFileSync(path.join(__dirname, "../README.md"), 'utf8')
    readme = readme.replaceAll(/(!\[code-coverage-badge.+?\))/g, badge)
    fs.writeFileSync(path.join(__dirname, "../README.md"), readme)

    console.log(readme)
})()
