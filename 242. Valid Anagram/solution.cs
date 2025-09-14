public class Solution
{
    public bool IsAnagram(string s, string t)
    {
        // convert strings to arrays
        char[] sToArray = s.ToCharArray();
        char[] tToArray = t.ToCharArray();

        // sort arrays then turn ararys back into strings
        Array.Sort(sToArray);
        Array.Sort(tToArray);
        string sSortedString = new string(sToArray);
        string tSortedString = new string(tToArray);

        // compare strings
        return sSortedString.Equals(tSortedString);
    }
}
