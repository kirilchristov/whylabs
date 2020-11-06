import "./App.css";
// import BucketContainer from "./BucketContainer";

const DATA_VALUES = [
  {
    date: 1604440297969,
    typeNull: 12,
    typeString: 21,
    typeNumeric: 7,
    typeBoolean: 18,
  },
  {
    date: 1604440297970,
    typeNull: 16,
    typeString: 100,
    typeNumeric: 3,
    typeBoolean: 10,
  },
  {
    date: 1604440315789,
    typeNull: 15,
    typeString: 29,
    typeNumeric: 4,
    typeBoolean: 21,
  },
  {
    date: 1604440330496,
    typeNull: 44,
    typeString: 230,
    typeNumeric: 3,
    typeBoolean: 0,
  },
  {
    date: 1604440330882,
    typeNull: 76,
    typeString: 10,
    typeNumeric: 19,
    typeBoolean: 160,
  },
]

const start = DATA_VALUES[0].date;
const bucket1 = [];
const bucket2 = [];
const bucket3 = [];

// SOLUTION
// we have three buckets and pass data on some condition

for (let i = 0; i < DATA_VALUES.length; i++) {
  if (DATA_VALUES[i].date - start < 10 * 1000) {
    bucket1.push(DATA_VALUES[i]);
  } else if (DATA_VALUES[i].date - start < 20 * 1000) {
    bucket2.push(DATA_VALUES[i]);
  } else {
    bucket3.push(DATA_VALUES[i]);
  }
}

//this func gets the bucket and sum all values for a key, returning the sums for each jey
const sumSameBuckets = (bucket) => {
  let typeNull = 0;
  let typeString = 0;
  let typeNumeric = 0;
  let typeBoolean = 0;

  for (let i = 0; i < bucket.length; i++) {
    typeNull = typeNull + bucket[i].typeNull;
    typeString = typeString + bucket[i].typeString;
    typeNumeric = typeNumeric + bucket[i].typeNumeric;
    typeBoolean = typeBoolean + bucket[i].typeBoolean;
  }
  return {
    typeNull,
    typeString,
    typeNumeric,
    typeBoolean,
  };
};

//Gets all the keys and calculates which is dominant key - returns a string value
const findCss = (someObject) => {
  return Object.keys(someObject).reduce(function (a, b) {
    return someObject[a] > someObject[b] ? a : b;
  });
};

const BucketContainer = (props) => {
  const bucketSummed = props.sumSameBuckets(props.bucket);
  const nameOfTheLargest = props.findCss(bucketSummed);
  const largestNumInBucket = bucketSummed[nameOfTheLargest];

  const graphTitles = Object.keys(bucketSummed);

  return (
    <div className="bucket">
    <h1>The largest in this bucket is {nameOfTheLargest} with value of {largestNumInBucket}</h1>
      {graphTitles.map((entry) => (
        <div className="singleGraph" key={entry}>
          <p>{entry} : {bucketSummed[entry]}</p>
          <div
            className={entry === nameOfTheLargest ? "largest" : entry}
            style={{
              width: bucketSummed[entry],
              height: 10,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};


//Pass the props of the buckets
function App() {
  return (
    <div className="App">
      <BucketContainer
        data={DATA_VALUES}
        findCss={findCss}
        bucket={bucket1}
        sumSameBuckets={sumSameBuckets}
      />
      <BucketContainer
        data={DATA_VALUES}
        findCss={findCss}
        bucket={bucket2}
        sumSameBuckets={sumSameBuckets}
      />
      <BucketContainer
        data={DATA_VALUES}
        findCss={findCss}
        bucket={bucket3}
        sumSameBuckets={sumSameBuckets}
      />
    </div>
  );
}

export default App;





