const BucketContainer = (props) => {
  const bucketSummed = props.sumSameBuckets(props.bucket);
  const nameOfTheLargest = props.findCss(bucketSummed);
  const largestNumInBucket = bucketSummed[nameOfTheLargest];

  const graphTitles = Object.keys(bucketSummed);

  return (
    <div className="bucket">
    <h1>The largest in this bucket is {nameOfTheLargest} with value of {largestNumInBucket}</h1>
      {graphTitles.map((entry) => (
        <div className="singleGraph">
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

export default BucketContainer;
