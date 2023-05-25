export function capitalizeFirstWord(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export function getTypeBackgroundColor(type) {
  switch (type) {
    case "grass":
      return "bg-teal-300";
    case "fire":
      return "bg-red-500 ";
    case "water":
      return "bg-blue-400";
    case "bug":
      return "bg-orange-400";
    case "normal":
      return "bg-slate-400";
    case "poison":
      return "bg-purple-400";
    case "electric":
      return "bg-yellow-400";
    case "ground":
      return "bg-orange-700";
    default:
      return "bg-gray-300";
  }
}

export function getTypeButtonColor(type) {
  switch (type) {
    case "grass":
      return "bg-teal-500 ";
    case "fire":
      return "bg-red-700 ";
    case "water":
      return "bg-blue-700";
    case "bug":
      return "bg-orange-700";
    case "normal":
      return "bg-slate-700";
    case "poison":
      return "bg-purple-700";
    case "electric":
      return "bg-yellow-700";
    case "ground":
      return "bg-orange-900";
    default:
      return "bg-gray-700";
  }
}
