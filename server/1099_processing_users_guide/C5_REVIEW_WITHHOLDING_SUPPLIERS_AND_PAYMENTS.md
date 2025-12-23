# REVIEW WITHHOLDING SUPPLIERS & PAYMENTS

After posting withholdings, users have many tools available to review Withholding Suppliers and Withholding payments. While users may not use all these review tools, this manual discusses how to use each one and what information each one provides.

## Running the BOR_AP_1099_Suppliers Query

The `BOR_AP_1099_SUPPLIERS` query can be used to provide a list of suppliers that are setup as withholding and to verify suppliers are setup with the correct Withholding Type and Withholding Class.

Below are step by step instructions on how to run the `BOR_AP_1099_SUPPLIERS` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. Enter `BOR_AP_1099_SUPPLIERS` in the Search field.
7. Click the **Search** button. The system displays results below.
8. Run the query results to either HTML or MS Excel. Both formats open in a new window.
9. Enter the following parameters:
   - **SetID**
   - **Supplier Status**
     > [!NOTE]
     > Institutions that were recently converted to using SHARE suppliers may need to run the query for both the SHARE setid and the setid used prior to conversion.
10. Select **View Results** to see the results.

## 1099 Vouchers by Supplier Inquiry

Users can utilize the Vouchers by Supplier business process below to view all the supplier withholding transactions by voucher. For example, if users wanted to review all vouchers marked as “Withholding” for Supplier ‘ABC,’ users could use the Vouchers by supplier tool to accomplish this.

Below are step by step instructions on how to view all the Supplier withholding transactions by voucher.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Review** link.
6. Select the **Vouchers by Supplier** link.
7. Enter the **SetID** and **Supplier ID**.
   > [!TIP]
   > Users can search using a variety of criteria, but it is most efficient to search by SetID and Supplier ID.
8. Once users get to the Vouchers by Supplier page, users may need to adjust the **Payment Start and End dates**, as the default to the previous calendar year.
9. Click the **Search** button.
10. Review the **Basic Information** in the search results. Users should see a line for each voucher with withholding payments to that specific Supplier. Included on this tab are the Business Unit, Voucher ID, Invoice Number, Invoice Date, Entity, Type and Jurisdiction.
11. On the **More Information** tab, users can review the Withholding Class, Payment Number, Withholding Basis Amount and bank information.
12. Review information. If there are withholding transactions missing, users need to make some adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## Withhold Payment Inquiry

The Withhold Payment Inquiry page enables users to review all payments and associated vouchers made to withholding entities by supplier. Unlike using the Vouchers by Supplier Inquiry, the Withholding Payments Inquiry allows users to search for a range of suppliers at one time.

Below are step by step instructions on how to review withhold payments:

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Review** link.
6. Select the **Withhold Payment** link.
7. On the search page, search for a range of Suppliers by **Supplier ID** or **Supplier Name**.
8. At a minimum, provide **Supplier SetID** and **From/To Dates**.
9. After entering criteria, click **Search**.
10. In the **Payment Details** section, users should see one row for each payment. The information listed includes the Payment Method, Reference and Amount, voucher number and remittance information. To see additional rows, simply use the page forward button.
11. Review information. If there are withholding transactions missing, users need to make adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## Supplier Balance by Class Inquiry

The Supplier Balances by Class page allows users to review a supplier’s total withholding transactions by class over a specified period. Based on the payment start and end dates, the system totals the payments per Withholding Class for the supplier selected.

Remember, withholding class indicates the reason for withholding, such as Non-Employee Compensation - 1099N Class 01.

Below are step by step instructions on how to review supplier balances by class.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Review** link.
6. Select the **Supplier Balance by Class** link.
7. On the search page, it is easiest to search by **SetID** and **Supplier ID**. For results to populate in this review, users must have already run the Post Withholding process.
8. Review information. If there are withholding transactions missing, users need to make adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## BOR_AP_1099_PMTS Query

The `BOR_AP_1099_PMTS` query returns a list of all Reportable Withholding Payments. This query lists all payments where both the Supplier and Voucher were marked as “Reportable.” The results include the Supplier, Voucher and Payment IDs.

When running this query, run it for both the primary and “B” Business Units. SHARE suppliers return in the query results for the primary business unit.

Below are step by step instructions on how to run the `BOR_AP_1099_PMTS` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the “Search by” field, enter `BOR_AP_1099_PMTS` and then press the **Search** button. Users can choose to run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters: **Start Date**, **End Date** and **Business Unit**.
8. Review information. If there are withholding transactions missing, users need to make some adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## BOR_AP_1099_JE Query

Since 1099s reflect only transactions entered normally through the Accounts Payable module, transactions entered through any other module or as an online journal entry are not automatically included in Withholding Reporting. Users can run the query `BOR_AP_1099_JE` to list the journal entries posted during the selected calendar year to the “typically” reportable accounts. These accounts include 719xxx, 7278xx, 7481xx and 751xxx. These transactions may need to be reported via a Manual Adjustment.

Below are step by step instructions on how to run the `BOR_AP_1099_JE` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the Search by field, enter `BOR_AP_1099_JE` and then click **Search**. Users can choose to run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters: **Calendar Year** and **Business Unit**.
8. Review information. If there are withholding transactions that require corrections, users need to make some adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## BOR_AP_1099_NONRPT_CONSISTENT Query

For a transaction to be included in Withholding Reporting, both the supplier and voucher must be marked as “Withholding.” The `BOR_AP_1099_NONRPT_CONSISTENT` query provides a list of transactions typically charged to reportable accounts (719xxx, 7278xx, 7481xx and 751xxx) and are not reported because:

- The supplier is marked as Withholding, but the associated vouchers are not, or
- The vouchers are marked as Withholding, but the associated supplier is not, or
- Neither the supplier nor voucher is marked as Withholding.

Below are step by step instructions on how to run the `BOR_AP_1099_NONRPT_CONSISTENT` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the “Search by” field, enter `BOR_AP_1099_NONRPT_CONSISTENT` and then press the **Search** button. Users can choose to run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters:
   - **From Date**
   - **To Date**
   - **Business Unit** (run query for both the primary and ‘B’ units)
8. Click on **View Results**.
9. As users review the query results, determine if any of these items need to be reflected in Withholding Reporting. Make adjustments to the withholding using either the Supplier or Voucher Line Update.

## BOR_AP_1099_MISMATCHED Query

The `BOR_AP_1099_MISMATCHED` query lists those transactions charged to any account where either the Supplier is marked as Withholding but the associated Vouchers are not, or the Vouchers are marked as Withholding but the associated Supplier is not.

This query is different from the `BOR_AP_1099_NONRPT_CONSISTENT` query in that it is not limited to only typically reportable accounts.

Below are step by step instructions on how to run the `BOR_AP_1099_MISMATCHED` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the “Search by” field, enter `BOR_AP_1099_MISMATCHED` and then click **Search**. Users can choose to run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters:
   - **Business Unit** (run query for both the primary and ‘B’ units)
   - **From Date**
   - **To Date**
8. As users review the query results, determine if any of these items need to be reflected in Withholding Reporting. Make adjustments to the withholding using either the Supplier or Voucher Line Update.

## Withholding Balances Control Report

The Withholding Control Report is an optional report that lists detailed information for each supplier with withholding activity. The report lists Withholding Suppliers with Withholding amounts during the period specified in the parameters. The report lists the amounts according to Class.

Below are step by step instructions on how to run the Withholding Balances Control Report.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **General Reports** link.
6. Select the **Withhold Control Report** link.
7. Select or Add a **Run Control ID**.
8. The parameters for this report include:
   - **SetID**
   - **Control ID**
   - **From/To Dates**
     Remember, the Control ID was set up at the beginning of the 1099 Processing and should include the institution and reporting year (e.g., `GSW_2022`).
9. Save and Select the **Run** button and then click **OK** to run the Withholding Control Report (`APX3012`) process.
10. Click the **Process Monitor** link.
11. Use the Process Monitor to verify the process runs to **Success**. Locate the `APX3012` report in the Report Manager.

## BOR_AP_1099_ADJUST Query

The `BOR_AP_1099_ADJUST` query lists all manual adjustments entered for the selected calendar year and can be run as needed. When users make withholding adjustments for the current 1099 processing year, ITS recommends users run this query before and after making withholding adjustments to compare results and verify adjustments were made correctly.

Below are step by step instructions on how to run the `BOR_AP_1099_ADJUST` query.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Query** link.
5. Select the **Query Viewer** link.
6. In the Search by field, enter `BOR_AP_1099_ADJUST` and then press **Search**. Users can choose to run this query to either HTML or to MS Excel. Both formats open in a new window.
7. To run the query, enter the following parameters:
   - **Calendar Year**
   - **Business Unit**
     In the query results, the TIN, Supplier ID, and Supplier Name along with the Payment Number, Withholding Amount, Adjustment Date, Withholding Class, and the Date the adjustment was posted appear.
8. Review information. If there are withholding transactions that require corrections, users will need to make adjustments. In addition, if there is a transaction listed that was not supposed to be a withholding transaction, users need to adjust that as well. Adjustments are covered in **Chapter 6: Corrections and Adjustments**.

## BORRY010 1099 Reportable Transactions Report

The Withholding Reportable Transactions Report is known as the `BORRY010`. Users can run this report to show all Withholding reportable transactions, including adjustments.

The information available in this report is dependent on when the user runs the report. Until the Withhold 1099 Report Post and Withhold 1099 Report processes run, not all columns on the report will populate. Only the Amount, Amt Under Minimum, and Calculated Reportable Amount columns will populate. The Reported Amount and Difference columns will not populate until the other processes are run.

Below are step by step instructions on how to run the `BORRY010` 1099 Reportable Transactions Report.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **BOR Menus** link.
4. Select the **BOR Accounts Payable** link.
5. Select the **BOR AP Reports** link.
6. Select the **1099 Reportable Transactions** link.
7. Select or create a new **Run Control**.
8. The report parameters include **Control SetID**, **Control ID** and **Calendar Year**. Users can specify a range of Social Security Numbers, if needed. To run the report on all Social Security Numbers, leave those fields blank. Users can print the Supplier mailing addresses on the report if needed.
   ![Extra Image from Page 47](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288123/p47_ect_Run_and_then_OK_to_run_the_process.___0Ack_the_P_uystpe.png)
9. Select **Run** and then **OK** to run the process.
10. Click the **Process Monitor** link.
11. Use the Process Monitor to verify the process runs to **Success**. Locate this report in the Process Monitor.
12. The completed report will list each reportable Supplier, along with their TIN and Supplier ID as shown below. For each Supplier, a list of the payments and vouchers marked as withholding are displayed along with their amounts subtotaled by Withholding Class.

![Extra Image from Page 48](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288120/p48_The_calculated_reportable_amount_must_meet_the_min_f4buhq.png)

The calculated reportable amount must meet the minimum for that Withholding Class to be reported.

### Examples

> **Example 1**
> If the institution plans to process 1099s for a B Business Unit, PeopleSoft will process these separately from other transactions. For example, say a voucher exists for Business Unit 53000 for Supplier 0000000001 (SSN 123456789) for $500 that is withholding applicable to 1099N - Class 01. Another voucher exists in the same Calendar Year for Business Unit 5300B for Supplier 0000000002 (SSN 123456789) for $500 that is also withholding applicable to 1099N – Class 01.
>
> Both vouchers will show up on the `BORRY010` report as non-withholding applicable since they do not meet the $600 threshold for Withholding 1099N – Class 01. Users need to determine whether to combine these voucher payments and this decision will determine what is reported to the IRS, as well as whether this Supplier receives a Copy B from the institution.

> **Example 2**
> If there is a payment not included on the 1099 Reportable Transactions Report and the user believes the payment should be included, check the supplier record and compare it to the voucher in question. For example, if the effective date of a Supplier Location/Address is updated to a date greater than the date on the voucher, then the system will not pick up the payment.
