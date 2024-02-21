const APIdata = fetch("https://dummyjson.com/users");
// console.log(APIdata);

new Promise((resolve, reject) => {
  if (APIdata) {
    resolve(APIdata);
  } else {
    reject("APIdata is not available");
  }
});


const outerPromise = new Promise((resolve, reject) => {
    const promise1 = new Promise((resolve, reject) => {
        return resolve("Promise 1");
    });
    const promise2 = new Promise((resolve, reject) => {
        return reject("Promise 2");
    });
    const promise3 = new Promise((resolve, reject) => {
        return resolve("Promise 3");
    });
    const promise4 = new Promise((resolve, reject) => {
        return resolve("Promise 4");
    });

    const promises = [
        promise1.then(response => ({ response })).catch(error => ({ error })),
        promise2.then(response => ({ response })).catch(error => ({ error })),
        promise3.then(response => ({ response })).catch(error => ({ error })),
        promise4.then(response => ({ response })).catch(error => ({ error }))
    ];

    Promise.all(promises).then((response) => console.log(response))

// APIdata.then((response) => {console.log(response)}).catch((error) => {console.log(error);}).finally(() => {console.log("Finally Block");});
//Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = "https://restcountries.com/v2/all";

const getCountriesData = () => {
  return fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
};
getCountriesData()
  .then((data) => {
    const [{ name, capital, population, area, languages }] = data;
    const worldLanguage = [];
    data.forEach(({ name, capital, population, area, languages }) => {
      const [{ name: languagesName }] = languages;
      console.log(name, capital, population, area, languagesName);
      worldLanguage.push(languagesName);
    });
    //Read the countries api and find out the 10 largest countries
    const areaOfCountries = data
      .slice()
      .sort((a, b) => a.area - b.area)
      .slice(0, 10)
      .map((data) => data.name);
    console.log(`10 largest countires ${areaOfCountries}`);
    //Read the countries api and count total number of languages in the world used as officials.
    console.log(`${worldLanguage.length} Languages used in world `);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//Print out all the cat names in to catNames variable.
//Read the cats api and find the average weight of cat in metric unit.

const catsAPI = "https://api.thecatapi.com/v1/breeds";

const catData = () => {
  return fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
};
catData().then((data) => {
  const [{ name, weight }] = data;
  data.forEach(({ name, weight }) => {
    const { metric } = weight;
    const newmetric = metric.split("");
    let avg = 0;
    for (const index of newmetric) {
      if (parseInt(index)) {
        avg += parseInt(index);
      }
    }
    console.log(`Cat Name-${name} and Avg weight ${avg / 2}`);
  });
});
