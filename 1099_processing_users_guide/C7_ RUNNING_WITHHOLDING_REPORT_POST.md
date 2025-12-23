# RUNNING WITHHOLDING REPORT POST

After all adjustments are made and all Withholding payments are reviewed again to ensure no further corrections are needed, run the Withhold 1099 Report Job process. This job performs both the Withhold 1099 Report Post process (`1099_RPT_PST`) and the Generate Withholding Reports process (`AP_APY1099`).

The 1099 Report Post application engine process populates the Withholding Table by extracting data from the Withhold Transaction table and inserts it into the Withholding Table if it exceeds the reporting threshold.

The Generates Withholding Reports process creates a flat file for the IRS and populates the “Withholding to Send” and “Copy B” tables. The system then uses the data to create a file for the tax entity, or IRS and forms for the Suppliers. The system also uses the data to process corrections.

## Running the Withhold 1099 Report Post Process

Below are step by step instructions on how to run the Withhold 1099 Report Post process.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **Withhold 1099 Report Job** link.
7. Create a new **Run Control ID** or select an existing Run Control ID.
8. On the 1099 Report Post page, enter the following:
   - **Request ID and Description**: Enter an ID and description.
   - **Process Frequency**: Select “Always Process.”
   - **Verify Include Manual Overrides** check box is selected. If the box is not selected, then manual withholding adjustments will not be reflected on the reported column in the 1099 Reportable Transactions report.
   - **Control SetID**: This is the institution’s SetID.
   - **Control ID**: This is the Control ID the institution set up for the 1099 reporting year (e.g., `UNG_2022`).
   - **Calendar SetID**: This is the SHARE SetID.
   - **Calendar ID**: This is “A1.”
   - **Fiscal Year**: This is the calendar year for 1099 reporting.
   - **Period**: This is always “1.”
   - **Type of File/Return**: There are three choices here:
     - **Original/Correction** generates the `IRS_001.TXT`. Users will most often choose Original/Correction.
     - **Test** generates the `IRS_001.TXT` File and populates only the `PS_WTHD_1099_COPYB` table.
     - **Replacement** generates the `IRS_001.TXT` File and deletes data from the Withholding Sent Tables.
   - **Replacement Character**: Leave this field blank unless instructed by IRS to enter one.
9. Depending on the Fiscal Year selected, the user will see specific 1099 Report Selections. Choose the applicable Process Options based on your reporting needs.

   > [!NOTE]
   > For years after 2019, users will have an option to choose All, 1099-MISC, 1099-INT, and 1099-G, or 1099-NEC

   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288115/p59_commended_Option__as_this_will_print_one_file_to_s_u8wv5n.png)

   **Recommended Option**, as this will print one file to send to IRS:

   - **All** - Select this option to produce ONE electronic IRS file containing 1099-MISC and 1099-NEC withholding information.

   **Other Options**:

   - **1099-MISC, 1099-INT and 1099-G** - Select this option to produce one electronic file containing all 1099-MISC withholding information
   - **1099-NEC** - Select this option to produce one electronic file containing all 1099-NEC withholding information

   > [!NOTE]
   > For years before 2020, users will have an option to choose All Files, Exclude Non-Employee Compensation or Include Non-Employee Compensation.

   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288115/p60____0AAll_-_Select_this_option_to_produce_two_electro_vs11vp.png)

   - **All** - Select this option to produce two electronic files, (1) one containing 1099-MISC with original NEC, and (2) the other containing 1099-MISC with Non-NEC and corrections (including corrections for NEC), all 1099-INT, all 1099-G and Corrections, if applicable. (NOTE: Only one file for Corrections.)
   - **Exclude Non Employee Compensation** - Select this option to produce one electronic file containing all 1099-MISC without NEC, 1099-INT, 1099-G and Corrections, if applicable. This option is not available if the 'Has the 1099-MISC containing Box 7 Non Employee Compensation file been sent and accepted by IRS?' box is checked. This option is used to run preliminary files for your review only.
   - **Include Non Employee Compensation** - Select this option to produce two electronic files, (1) one containing all 1099-MISC with NEC and (2) the other containing 1099-MISC without NEC for the same recipients that have 1099-MISC with NEC in the first file.
     > [!IMPORTANT]
     > This second file must also be transmitted to the IRS when you submit the NEC.txt file containing all 1099-MISC with Non-employee compensation. This option is not available if the 'Has the 1099-MISC containing Box 7 Non Employee Compensation file been sent and accepted by IRS?' box is checked.

10. Once the information above is entered, click the **Save** button.
11. Click the **Run** button.
12. Select “1099 Report Post” to run the `RPT_1099` process Post. Click **OK** to continue.
    ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288112/p61_Click_the_Process_Monitor_link.__0AOnce_the_process__jdvchn.png)
13. Click the **Process Monitor** link.
14. Once the process runs to Success, click on `RPT_1099` under the Process Name column.
    ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288099/p61_RUNNING_WITHHOLDING_REPORT_POST_step14_xlt9wm.png)
15. Click on the `AP_APY1099` link.
    ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288111/p61_on_the_View_LogTrace_link._n8sufh.png)
16. Click on the **View Log/Trace** link.
    ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288110/p61_See_page_60_for_the_next_steps____Retrieving_the_I_g4aqfl.png)
17. See page 60 for the next steps – ‘Retrieving the IRS Tax File’

## Retrieving the IRS Tax File

1. Do not left click to open the file.
2. Right-click on the `IRS_001.TXT` link and select “Save Link As.”
   ![](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288110/p62_r_CY2020_and_beyond__if_you_chose_the_ALL_option__ma0vel.png)
   > [!NOTE]
   > For CY2020 and beyond, if you chose the ALL option (p. 57), this file contains all 1099N and 1099M reporting that institutions will submit to the IRS.
3. Save the file to the computer. Do not Change the file name. Do not open the file in Excel.
