using LeetCode._217._Contains_Duplicate;

namespace LeetCode
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] nums = new int[] { 1, 2, 3, 1 };
            int[] nums2 = new int[] { 1, 2, 3, 4 };

            bool result = ContainsDuplicate.hasDuplicate(nums);
            bool result2 = ContainsDuplicate.hasDuplicate(nums2);

            Console.WriteLine($"Result: {String.Join(", ", nums)} {result}");
            Console.WriteLine($"Result2: {String.Join(", ", nums2)} {result2}");
        }
    }
}
