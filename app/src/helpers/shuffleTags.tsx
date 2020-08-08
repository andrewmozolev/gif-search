
const TAGS = [
  'cat', 'dog', 'monkey', 'elephant', 'parrot', 'snake', 'car', 'bus', 'truck', 'speed', 'crazy', 'love', 'ok', 'nice', 'angry', 'polite', 'gym', 'summer', 'workout', 'autumn', 'mem', 'happiness', 'motivation', 'life', 'cool', 'hot', 'music', 'hair', 'beauty', 'landscape', 'repost', 'photography', 'inspiration', 'design', 'beautiful', 'cool', 'football', 'fit', 'goals', 'style', 'swag', 'health', 'funny', 'healthy', 'friends', 'blogger', 'photo', 'food', 'fun', 'happy', 'artist', 'pink', 'me', 'f4f', 'cute', 'follow', 'pretty', 'art', 'travel', 'vacation', 'moon', 'jump', 'sun', 'resort', 'tourist', 'bug', 'honeymoon', 'fiday', 'todo', 'super', 'flight', 'sun', 'puppy love', 'mans bestfriend', 'womans best friend', 'cats', 'dogs', 'rubik', 'dog life', 'cat life', 'pet', 'tech', 'hurry', 'action film', 'apple', 'android', 'apple vs android', 'strike', 'VR', 'mobile', 'easy life', 'innovation', 'game', 'fall', 'ball', 'clock', 'laptop', 'typing', 'winter', 'spring', 'say yes', 'no wedding', 'wedding', 'love is love', 'look good feel good', 'feel the burn', 'no pain no gain', 'working on a better me', 'cardio', 'be fit', 'yoga for days', 'fit life', 'train hard', 'no excuses',
];

const shuffleArray = (array:Array<string>):Array<string> => {
  let tempArray = [...array];
  const newArray:Array<string> = [];

  while (tempArray.length > 0) {
    const index = Math.floor(Math.random() * tempArray.length);
    newArray.push(tempArray[index]);
    tempArray = [...tempArray.slice(0, index), ...tempArray.slice(index + 1)];
  }

  return newArray;
};

let shuffledTags:Array<string> = [];

const getShuffledTags = ():Array<string> => {
  if (shuffledTags.length > 0) {
    return shuffledTags;
  }
  shuffledTags = shuffleArray(TAGS);

  return shuffledTags;
};

export default getShuffledTags
