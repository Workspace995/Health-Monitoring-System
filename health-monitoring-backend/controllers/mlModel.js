const tf = require('@tensorflow/tfjs-node');

const model = tf.sequential();
model.add(tf.layers.dense({units: 64, activation: 'relu', inputShape: [5]}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy'});

// Dummy training data
const xs = tf.tensor2d([[130, 85, 140, 75, 200], [120, 80, 110, 70, 190], [140, 90, 160, 85, 210]]);
const ys = tf.tensor2d([[1], [0], [1]]);

model.fit(xs, ys, {epochs: 10}).then(() => {
  console.log('Model trained!');
});

const getRecommendations = (data) => {
  const inputData = tf.tensor2d([data]);
  const prediction = model.predict(inputData);
  return prediction.dataSync()[0] > 0.5 ? 'Follow a low-salt diet.' : 'Keep up the good work!';
};

module.exports = { getRecommendations };
