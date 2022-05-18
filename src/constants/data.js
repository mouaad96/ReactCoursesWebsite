import images from "./images";

const courses = [
  {
    id: 1,
    title: "C# for Beginners",
    category: "Programming",
    image: images.csharp,
    about: "this course is about c#",
    videos: 100,
    isCompleted: false,
  },
  {
    id: 2,
    title: "java for Beginners",
    category: "Programming",
    image: images.java,
    about: "this course is about java",
    videos: 200,
    isCompleted: true,
  },
  {
    id: 3,
    title: "Dessert",
    category: "Kitchen",
    image: images.dessert,
    about: "this course is about how to make deserts",
    videos: 10,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Juce",
    category: "Kitchen",
    image: images.juce,
    about:
      "this course is about how to make juces this course is about how to make juces this course is about how to make juces this course is about how to make juces this course is about how to make juces this course is about how to make juces this course is about how to make juces",
    videos: 25,
    isCompleted: true,
  },
];

const members = [
  {
    id: 1,
    name: "Jhon",
    role: "Community Admin",
    image: "",
  },
];

const events = [
  {
    id: 1,
    title: "First Event",
    image: images.event1,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
  {
    id: 2,
    title: "Second Event",
    image: images.event2,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
  {
    id: 3,
    title: "Third Event",
    image: images.event3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
  {
    id: 4,
    title: "Fourth Event",
    image: images.event4,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
  {
    id: 5,
    title: "Fifth Event",
    image: images.event5,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
  {
    id: 6,
    title: "Sixth Event",
    image: images.event6,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a erat fermentum, elementum tortor ac, porta ex. Nullam imperdiet sapien ac massa bibendum ornare. Suspendisse potenti. Nam odio ipsum, pretium eu accumsan ac, venenatis non dui. Duis aliquam interdum sapien. Sed id vehicula leo, sit amet venenatis neque. Fusce sollicitudin et est at lacinia. Sed in tincidunt metus. Integer ac ultrices nibh. Donec ultrices vitae diam at maximus.",
  },
];

export default { courses, events };
