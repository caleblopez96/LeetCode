type Positioning = {
    role: string;
    experience: string;
    impact: string[];
    attributes: string[];
    positioningStatement(): string;
};

const caleb: Positioning = {
    role: "Software Developer",
    experience: "2+ years building UIs with React, integrating APIs, and developing		backend services",
    impact: [
        "Bridging the gap between technical and non-technical teammates",
        " keeping projects aligned",
        "ensuring everyone stays on the same page",
    ],
    attributes: ["Adaptive", "Analytical", "Reliable", "Collaborative"],
    positioningStatement() {
        const skills = [...this.impact];
        const last = skills.pop();
        return `I'm a ${this.role} with over ${this.experience}. In addition to my technical expertise, I'm skilled at ${skills.join(
            ","
        )} and ${last}. ${this.attributes.join(", ")}`;
    },
};

console.log(caleb.positioningStatement()); // "I'm a Software Developer with over 2+ years building UIs with React, integrating APIs, and developing backend services. In addition to my technical expertise, I'm skilled at Bridging the gap between technical and non-technical teammates, keeping projects aligned and ensuring everyone stays on the same page. Adaptive, Analytical, Reliable, Collaborative"
