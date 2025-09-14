public class Solution
{
    public int LengthOfLastWord(string s)
    {
        string trimmedString = s.Trim();

        char[] delimiters = [' '];

        string[] words = trimmedString.Split(delimiters);

        var lastElement = words[words.Length - 1];

        return lastElement.Length;
    }
}

// trim the white space from front and back of the string
// get the last element of the sring
//      split the string into words
//      get the last word
// find and return length of last word