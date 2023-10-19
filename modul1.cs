//Some C# code here
using System;

namespace _06BarcodeGenerator
{
    internal class Program
    {
        static void Main(string[] args)
        {


            string startCode = Console.ReadLine();
            string endCode = Console.ReadLine();

            int startNumber = int.Parse(startCode);
            int endNumber = int.Parse(endCode);



            for (int i = startNumber; i < endNumber; i++)
            {
                bool isLegit = true;

                string iCode = i.ToString();
                //Console.WriteLine(iCode);
                for (int j = 0; j < iCode.Length; j++)
                {
                    // Console.WriteLine(j);
                    if (iCode[j] % 2 == 0)
                    {
                        isLegit = false;
                    }
                }

                if (isLegit)
                {
                    Console.Write($"{iCode} ");
                }
            }
            // Console.WriteLine(i);



        }
    }
