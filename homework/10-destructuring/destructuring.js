// # Differences between destructuring arrays and objects

/* ## ARRAYS

Destructuring in arrays requires extracting items at varying index positions
in the data structure. This is helpful with collecting only items of value
within a programming operation. In the case below, I extracted only my active 
hobbies by destructuring the relevant array. Destructuring objects pays little 
attention to the index, and instead works with the object property keys as 
paramount in relevant operations.

*/

const hobbies = ["Playing chess", "Coding", "Writing poetry",
    "Reading books", "Designing art"];

const [, coding, poetry, , artDesign] = hobbies;
console.log(`1: ${coding}, 2: ${poetry}, 3: ${artDesign}`);

/* ## OBJECTS

When destructuring objects, the key-value relationship is of key importance.
This is opposite to the importance paid to indexes when destructuring arrays.
If the property value is a direct string, this can be destructured with little
to no difficulty. When destructuring values in nested objects, it is important
to work with structural components to extract essential values. After extracting
the necessary value, it can then be used at will. The property values in objects
are usually first-class citizens in destructuring operations. This is true,
even when nested.

*/

const keyLanguageTechnologies = {
    javascript: 'Node.js',
    dart: {
        toolkit: 'Flutter',
        design: 'Material Design',
        mainTarget: 'Android'
    }
}

const { javascript: backend, dart: { toolkit: mobileUse } } = keyLanguageTechnologies;
console.log(`Backend: ${backend}, Mobile: ${mobileUse}`);