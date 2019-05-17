const questions = [
    {
        type: "textarea",
        label: "Introduce yourself to the group!",
        name: "introduction"
    },
    {
        type: "text",
        label: "Do you have a nickname? Can we use it?",
        optional: true,
        name: "nickname"
    },
    {
        type: "text",
        label: "What area are you from?",
        optional: true,
        name: "location"
    },
    {
        type: "textarea",
        label: "Where do you work, what do you do?",
        optional: true,
        name: "work"
    },
    {
        type: "textarea",
        label: "What's your favorite spare time activity?",
        optional: true,
        name: "sparetime"
    },
    {
        type: "textarea",
        label: "What's an accomplishment you're proud of?",
        optional: true,
        name: "accomplishment"
    },
    {
        type: "textarea",
        label: "What's your favorite thing about yourself?",
        optional: true,
        name: "thing"
    },
    {
        type: "select",
        label: "Hogwarts House?",
        name: "hogwarts",
        value: "NA",
        options: [{
        label: "I'd prefer not to answer",
        value: "NA"
        },{
        label: "Gryffindor",
        value: "Gryffindor"
        },{
        label: "Slytherin",
        value: "Slytherin"
        },{
        label: "Ravenclaw",
        value: "Ravenclaw"
        },{
        label: "Hufflepuff",
        value: "Hufflepuff"
        }]
    },
    {
        type: "select",
        label: "Alignment?",
        name: "alignmment",
        value: "NA",
        options: [{
        label: "I'd prefer not to answer",
        value: "NA"
        },{
        label: "Lawful Good",
        value: "Lawful Good",
        },{
        label: "Neutral Good",
        value: "Neutral Good"
        },{
        label: "Chaotic Good",
        value: "Chaotic Good"
        },{
        label: "Lawful Neutral",
        value: "Lawful Neutral"
        },{
        label: "True Neutral",
        value: "True Neutral"
        },{
        label: "Chaotic Neutral",
        value: "Chaotic Neutral"
        },{
        label: "Lawful Evil",
        value: "Lawful Evil"
        },{
        label: "Neutral Evil",
        value: "Neutral Evil"
        },{
        label: "Chaotic Evil",
        value: "Chaotic Evil"
        }]
    },
    {
        type: "text",
        label: "Myers–Briggs Type Indicator?",
        name: "mbti",
        optional: true,
    },
]

module.exports = questions;