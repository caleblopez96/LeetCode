var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var caleb = {
    role: "Software Developer",
    experience: "2+ years building UIs with React, integrating APIs, and developing		backend services",
    impact: [
        "Bridging the gap between technical and non-technical teammates",
        " keeping projects aligned",
        "ensuring everyone stays on the same page",
    ],
    positioningStatement: function () {
        var skills = __spreadArray([], this.impact, true);
        var last = skills.pop();
        return "I'm a ".concat(this.role, " with over ").concat(this.experience, ". In addition to my technical expertise, I'm skilled at ").concat(skills.join(","), " and ").concat(last);
    },
};
console.log(caleb.positioningStatement()); // I’m a software developer with over two years of experience building UIs with React, integrating web APIs, and developing backend services. In addition to my technical expertise, I’m skilled at bridging the gap between technical and non-technical teammates, keeping projects aligned and ensuring everyone stays on the same page.
