namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Hello, World!");
            Solution solution = new Solution();
            int[] ints = { 1, 2, 3 };
            int[] result = solution.TwoSum(ints, 3);
            Console.WriteLine($"[{result[0]}, {result[1]}]");
        }

        public class Solution
        {
            public int[] TwoSum(int[] nums, int target)
            {
                for (int i = 0; i < nums.Length; i++)
                {
                    for (int j = i + 1; i < nums.Length; j++)
                    {
                        if (nums[i] + nums[j] == target)
                        {
                            return [i, j];
                        }
                    }
                }
                return [];
            }
        }
    }
}
