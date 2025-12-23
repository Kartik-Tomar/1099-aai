# PRODUCING WITHHOLDING COPY B REPORTS

The 1099 Copy B Reports are the reports printed out and mailed to Suppliers. Complete this step after making all adjustments and balancing 1099s as instructed previously. To produce Withholding Copy B Reports, run the Print 1099 Copy B job (process `APCOPYB`).

## Run Print 1099 Copy B Process (APCOPYB) For 1099-NEC and 1099-MISC

Below are step by step instructions on how to run process:

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **Withhold 1099 Report Job** link.
7. Enter a **Run Control ID** to navigate to the Withholding 1099 Report Job page. Then the following parameters:
   - **Request ID and Description**: Enter an ID and description.
   - **Process Frequency**: Select “Always Process.”
   - **Include Manual Overrides** check box should be selected. If the box is not selected, then withholding adjustments will not be reflected on the reported column in the 1099 Reportable Transactions report.
   - **Control SetID**: This is the institution’s SetID.
   - **Control ID**: This is the Control ID the institution set up for the Withholding reporting year (e.g., `CSU_2022`).
   - **Calendar SetID**: This is the SHARE SetID.
   - **Calendar ID**: This is “A1.”
   - **Fiscal Year**: This is the calendar year for Withholding reporting.
   - **Period**: This is always “1.”
   - **Type of File/Return**: There are three choices here – Original/Correction, Replacement, Test. Most often users choose Original/Correction.
     - **Original/Correction** generates the `IRS_001.TXT`.
     - **Test** generates the `IRS_001.TXT` File and populates only the `PS_WTHD_1099_COPYB` table.
     - **Replacement** generates the `IRS_001.TXT` File and deletes data from the Withholding Sent Tables.
   - **Replacement Character**: Leave this field blank, unless otherwise instructed by the IRS.
   - **Withhold Type Process Option**: “All” to print 1099-NEC and 1099-MISC Copy Bs.
   - **Supplier Select Option**: “Select All Suppliers” or specify specific suppliers to print.
   - **AP 1099 sort order**: Select the desired sort order.
8. Once the information above is entered, click the **Save** button.
9. Click the **Run** button.
10. Click the check box for the **Print 1099 Copy B**. Click **OK** to continue. The system navigates to the 1099 Report Post/Report/Copy B page.
    ![Click the check box for the Print 1099 Copy B example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288100/p71_PRODUCING_WITHHOLDING_COPY_B_REPORTS_step10_pmbfvt.png)
11. Click the **Process Monitor** link.
12. Use the Process Monitor to verify the process runs to **Success**.
13. See Reviewing and Printing 1099 Copy B Reports on page 70.

## Reviewing and Printing 1099 Copy B Reports

Once the `APCOPYB` Job runs to success and posts, users can retrieve the 1099-NEC and 1099-MISC Copy Bs in the Report Manager.

Below are step by step instructions on how to review and print Copy B Reports.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Reporting Tools** link.
4. Select the **Report Manager** link.
5. Select the **1099 Reports** link.
6. Click on the **Administration** tab.
7. For the 1099-MISC Copy B’s, click on `APX1099CT` - `APX1099CT.pdf` link. Download the pdf file and save to a secure location.
   ![Report Manager page, download pdf example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288106/p72_the_Administration_tab.___0A1099-MISC_Copy_B_s__clic_jc4a5h.png)
8. For the 1099-NEC Copy B’s, click on `APX1099N` - `APX1099N.pdf` link.
   ![Report Manager page, 1099-NEC Copy B’s download pdf example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288104/p73_ITS_strongly_recommends_users_review_1099-MISC_and_ycyyla.png)

9. ITS strongly recommends users review 1099-MISC and 1099-NEC Copy B forms before printing them. Users can compare Copy B forms with the `BORRY010`–Reportable Transactions Report, which prints in TIN order. Also, users can compare the Copy B forms to the 1099 Withholding to Send Detail Report, which prints in Supplier ID order. Compare the number of Copy B forms printed with the number shown in the `IRS_001.TXT` file as part of the finalization process.
10. After reviewing the Copy B forms, download the forms to a secure location on a computer and then print them using Adobe Reader so the Copy B forms print correctly. ITS recommends printing one form to test with the mailing (window) envelope. Depending on printer settings, printing directly from the PeopleSoft browser window may be the best option.
11. After printing, mail the Copy B forms to Suppliers.
