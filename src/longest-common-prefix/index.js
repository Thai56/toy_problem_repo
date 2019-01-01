function findLongestCommonPrefix(modelStr, strs) {
	var max = 0;
	var result = '';
	let i = 0;
	
	while(i < modelStr.length) {
		const targetChar = modelStr[i];
		
		for (var j = 0; j < strs.length; j++) {
			const stringToCompare = strs[j];
			
			if (stringToCompare[i] === targetChar) {
				if (j === strs.length - 1) {
					result += stringToCompare[i];
				}
				
				continue;
			}

			return result;
		}

		i++;
	}

	return result;
}

var longestCommonPrefix = function(strs) {
	if (strs.length === 1) {
		return strs[0];
	}
	
	const modelStr = strs.splice(0, 1)[0];
	
	if (strs.length) {
		return findLongestCommonPrefix(modelStr, strs);
	}
	
	return '';
}

module.exports = longestCommonPrefix;
