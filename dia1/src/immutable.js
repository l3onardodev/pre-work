const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

//variável jane faz REFERENCIA para o objeto "john" na memory heap. Logo, toda mudança que eu fizer em jane, irá ser espelhada em "john";
const jane = john

jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')

console.log('John:', john)
console.log('Jane:', jane)
