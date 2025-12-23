# REVIEW WITHHOLDING REPORTABLE TRANSACTIONS

Once the Generate Withholding Reports process have been completed, review all 1099 reportable transactions before producing the final reports. After the `IRS_001.TXT` file has been created, review the appropriate queries and reports for verification. See **Chapter 5: Review 1099 Items** before producing the Copy B forms.

## BORRY010 1099 Reportable Transactions Report

The `BORRY010` 1099 Reportable Transactions Report listed here is the same report as the report in **Chapter 5**. Previously, not all columns were completed because the Withholding 1099 Report Post process and the Generating Withholding Reports process was not yet completed. With these two processes completed, run the `BORRY010` report again to verify all columns are marked complete.

> [!NOTE]
> Until the Withhold 1099 Report Post and Withhold 1099 Report processes run, not all columns on the report will populate. Only the Amount, Amt Under Minimum, and Calculated Reportable Amount columns will populate. The Reported Amount and Difference columns will not populate until the other processes run.

Below are step by step instructions on how to run the `BORRY010` 1099 Reportable Transactions Report again.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **BOR Menus** link.
4. Select the **BOR Accounts Payable** link.
5. Select the **BOR AP Reports** link.
6. Select the **1099 Reportable Transactions** link.
7. Select the previously saved **Run Control**.
8. The report parameters include **Control SetID**, **Control ID** and **Calendar Year**.
   Users can specify a range of Social Security Numbers, if needed. To run the report on all Social Security Numbers, leave those fields blank. Users can print the Supplier mailing addresses on the report if needed.
   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288107/p64_Select_Run_and_then_OK_to_run_the_process.___0AClick_wtuzbi.png)
9. Select **Run** and then **OK** to run the process.
10. Click the **Process Monitor** link.
11. Use the Process Monitor to verify the process runs to **Success**. Locate this report in the Report Manager.
12. The completed report will list each reportable Supplier, along with their TIN and Supplier ID.

## 1099 Withhold To Send Detail Report

The 1099 Withhold to Send Detail Report lists all the information created by the 1099 Reporting Process and is a replica of the data in the file users will send to the IRS. This report can be utilized to review a summary of the data stored in the Withholding Detail table. Users can also run delivered query `BOR_AP_1099_SND_DTL_TOT` after running this report to obtain totals not provided in the report.

Below are step by step instructions on how to run the 1099 Withhold to Send Detail Report.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **1099 to Send Detail** link.
7. Enter the **Run Control ID**.
8. Click the **Search** button.
9. The parameters for this report include:

   - **SetID**
   - **Control ID** (e.g., `KSU_2023`)
   - **Fiscal Year**: This is the Withholding reporting year.

   For CY2020 and beyond, there are no choices for separating NEC and MISC:
   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288106/p66_For_CY2019_and_before__there_are_options_for_separ_ejbtha.png)

   For CY2019 and before, there are options for separating NEC and MISC:
   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288106/p66_1099_Processing__0AUse_0Aegents_of_the_University_Syst_g6rxat.jpg)

10. Select the **Run** button.
11. Click **OK** to run the process.
12. Click the **Process Monitor** link.
13. Use the Process Monitor to verify the process runs to **Success**.
14. Click the **Report Manager** link to locate this report.
15. Click on the **Administration** tab.
16. Click on `APX8056.pdf` link.
17. The resulting report is produced in PDF format and is a replica of the data included in the `IRS_001.TXT` file.
    > [!NOTE]
    > This is an Oracle produced report and it does not include the Withholding Type (1099M or 1099N) in the report. Users can read the description to distinguish between 1099N, Class 01 and 1099M, Class 01.
18. At this point, review the file and verify withholding information is accurate. If it is not, go back to **Chapter 6: Corrections and Adjustments of 1099 Items** and make any adjustments.
19. After making adjustments, complete the review and re-run the `1099_RPT_PST` and `AP_APY1099` processes in **Chapter 7**.

## BOR_AP_1099_SND_DTL_TOT Query

The `BOR_AP_1099_SND_DTL_TOT` query can be utilized to obtain reportable totals grouped by class. These reportable totals should match both the total on the `BORRY010` report and the 1099 Withholding to Send Detail Report. Once users obtain totals for the 1099 Withholding to Send Detail Report, balance and finalize the 1099s.

Below are step by step instructions on how to run the `BOR_AP_1099_SND_DTL_TOT` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the Search by field, enter `BOR_AP_1099_SND_DTL_TOT` and then press the **Search** button. Users can run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters:
   - **1099 Year**
   - **Business Unit**
8. From the query results, compare the “Sum Basis Amount” with the Grand Totals on the `BORRY010` – 1099 Reportable Transactions Report to confirm these totals are the same for each Withholding code. Also, users can compare the “Sum Basis Amount” and the “Count SetID” from the query with the totals in the `IRS_001.TXT` file. Users can locate the count and totals in “Record Type C” (Payor End of Data Record).
9. Differences in the count may be a result of Suppliers with multiple address sequences in the 1099 Withholding to Send Detail Report. The system will combine these Suppliers in the `IRS_001.TXT` file, causing the `IRS_001.TXT` file to show a lower count.
10. The count provided in the “Count SetID” column is the number of 1099s to be produced for that specific withholding code. Since the same 1099 may include multiple withholding codes, a 1099 may be included in counts for more than one withholding code.
11. Once users balance and finalize 1099s, produce the 1099 Copy B Reports for Suppliers.
