public class Solution
{
  public int[] GetConcatenation(int[] nums)
  {
    int[] copy = nums;
    int[] ans = copy.Concat(nums).ToArray();
    return ans;
  }
}