const mainnav = document.querySelector(".animateMe");
const hambutton = document.querySelector("#myButton");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

const modificationDate = document.querySelector("#lastmodified");

const today = new Date();

modificationDate.innerHTML = new Date(document.lastModified);

let year = today.getFullYear();

document.querySelector("#currentyear").innerHTML = year;

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Set event listeners
const all = document.getElementById("all");
const cse = document.getElementById("cse");
const wdd = document.getElementById("wdd");

displayCard(courses);

all.addEventListener("click", () => {
    displayCard(courses);
})
cse.addEventListener("click", () => {
    displayCard( courses.filter(course => course.subject == 'CSE'));
})
wdd.addEventListener("click", () => {
    displayCard( courses.filter(course => course.subject == 'WDD'));
})



function displayCard(coursesfiltered) {
    document.getElementById("courses").innerHTML = ""

    // create running credit total
    let credits = 0;

    coursesfiltered.forEach(course => {
        const courseCard = document.createElement("section");
        courseCard.innerHTML = `${course.subject} ${course.number}`;

        document.getElementById("courses").appendChild(courseCard);

        courseCard.classList.add("course");
        // if the course is completed, add it to a class so the CSS can display
        // it properly
        if (course.completed == true) {
            courseCard.classList.add("completed");
        }

        credits += course.credits;

        courseCard.addEventListener("click", () => {
            displayModal(course);
        })

    // Display the total credits
    document.getElementById("credits").innerHTML = `Total Credits: ${credits}`;
});
}

const modal = document.querySelector("#courseDialog");


function displayModal(course) {
    const button = document.createElement("button");
    button.classList.add("close-button");
    button.textContent = "Close";


    const modal = document.querySelector("#courseDialog");

    button.addEventListener("click", () => {
        modal.close();
    });

    modal.innerHTML = "";

    const subject = document.createElement("h2")
    subject.innerHTML = `${course.subject}${course.number}`;
    const title = document.createElement("h3");
    title.innerHTML = course.title;
    const credits = document.createElement("p");
    credits.innerHTML = `${course.credits} credits`;
    const description = document.createElement("p");
    description.innerHTML = course.description;
    const certificate = document.createElement("p");
    certificate.innerHTML = `Certificate: ${course.certificate}`;
    const technology = document.createElement("p");
    technology.innerHTML = course.technology.join(', ');

    modal.appendChild(subject);
    modal.appendChild(title);
    modal.appendChild(credits);
    modal.appendChild(description);
    modal.appendChild(certificate);
    modal.appendChild(technology);
    modal.appendChild(button);

    modal.showModal();
}