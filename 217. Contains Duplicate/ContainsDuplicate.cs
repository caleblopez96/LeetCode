public class ContainsDuplicate
{
    public static bool hasDuplicateBruteForce(int[] nums)
    {
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                if (nums[i] == nums[j])
                {
                    return true;
                }
            }
        }
        return false;
    }

    public static bool hasDuplicate(int[] nums)
    {
        Array.Sort(nums);
        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] == nums[i - 1])
            {
                return true;
            }
        }
        return false;
    }

    public static bool hasDuplicateHashSet(int[] nums)
    {
        HashSet<int> seen = new HashSet<int>();
        foreach (var num in nums)
        {
            if (seen.Contains(num))
            {
                return true;
            }
            seen.Add(num);
        }
        return false;
    }
}