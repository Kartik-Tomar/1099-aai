# COMPLETING 1099 PROCESSING FOR THE YEAR

Once Copy B reports have been verified and mailed, users should send the `IRS_001.TXT` file(s) to the IRS.

## Sending the IRS_001.TXT File

When users are ready to send the `IRS_001.TXT` file, send it electronically to the IRS. For detailed instructions on sending this file, refer to IRS Publication 1220. Users can find this publication on the IRS website here. Users can also find more detailed information from the IRS about Withholding Payments here.

> [!NOTE]
> The due date for IRS Electronic Filing is January 31, 2025.

ITS does not provide instructions on how to submit the institution’s file to the IRS. Users can read more about filing electronically at the IRS website here and how to submit the institution’s file at the IRS FIRE Production System here.

### Next Steps

1. If the file is accepted by the IRS, run the Withhold Sent Process.
2. If the file is accepted by IRS, but a correction file is needed for a supplier, run the Correction File Process.
3. If the file is rejected by the IRS, run the Replacement File Process.

## Running the Withhold Sent (WTHD_SNT) Process

The final step in the entire Withholding process is to run the Withhold Sent Process. Use the Withhold Sent page (`WTHD_SNT`) to request a run of the Withholding Sent File Application Engine process (`WTHD_SNT`). This prepares the institution’s return information to make corrections and refile, if needed.

This application engine process finalizes the Withholding reporting and file creation process. This process records all the data in the file sent in the Withholding Sent tables (`PS_WTHD_SENT_DTL` and `PS_WTHD_SENT_HDR`) and deletes the data from the Withholding to Send tables (`PS_WTHD_TO_SND_DTL` and `PS_WTHD_TO_SND_HDR`).

> [!WARNING]
> Users should not run this process until they send the `IRS_001.TXT` file to the IRS and receive confirmation of successful transmission. The system uses this information when creating correction or replacement files.

Below are step by step instructions on how to run the Withhold Sent process.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **Withholding Sent File** link.
7. Select or Add a **Run Control ID**.
8. Enter parameters. The parameters for this process are:

   - **Request ID and Description**
   - **Process Frequency**: Set to “Always”
   - **SetID**
   - **Control ID**: Use the Control ID used through the current Withholding year’s processing (e.g., `USO_2021`).
   - **IRS Options**: Leave these settings as defaulted. The box should not be selected. The Withhold Sent Option should remain set to All.

   Example after CY2020:
   ![Withholding link page, Enter parameters example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288103/p76__WTHD_SNT__process_and_click_OK.__0Ahe_process_runs__n1lm8d.png)

9. Select “WTHD_SNT” process and click **OK**.
10. Once the process runs to **Success** and is **Posted**, then Withholding processing for the year is officially complete.

## Creating a Correction File

> [!IMPORTANT]
> IF THE INSTITUTION ALREADY SUBMITTED THE ORIGINAL/REPLACEMENT FILE TO THE IRS, THE WITHHOLD SENT (`WTHD_SNT`) PROCESS MUST RUN BEFORE MAKING ANY CORRECTIONS.

If an error with the file has been identified after the IRS accepted and processed it and the file is in “Good, Released” status, a corrected return needs to be filed. Do not file the original file again as this may result in duplicate reporting. File only the returns that require corrections.

As noted above, users must run the Withhold Sent Process before making and processing corrections. If users forget to run this process, they may need to manually submit the correction file.

If it is determined that incorrect data was reported for a supplier or a group of suppliers, a correction file needs to be created. To correct the transaction data within the PeopleSoft Payables system, do one of the following:

- Adjust the individual voucher lines for the supplier using the Withholding Invoice Line Update page and running the Withholding Update process for the supplier(s).
- Enter an adjustment on the Withhold Adjustments page for the supplier(s).
- Enter a new voucher for the supplier(s).

Below are step by step instructions on how to create a correction file.

1. Confirm the Withholding Sent File process ran for previous submissions and corrections to the IRS.
2. Make the necessary withholding corrections. Adjust the individual voucher lines for the supplier using the Withholding Invoice Line Update.
3. Run the Update Withholdings process.
4. Click the **NavBar** icon.
5. Click the **Menu** icon.
6. Select the **Suppliers** link.
7. Select the **1099/Global Withholding** link.
8. Select the **1099 Reports** link.
9. Select the **Withhold 1099 Report Job** link.
10. After the process runs again, select the **Original/Correction** option on the Withhold 1099 Report Post page.
    ![1099 Reports page, select the Original/Correction option example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288102/p78_lect__Specify_Supplier_s__in_the_Supplier_Select__tcyzpz.png)
11. Select “Specify Supplier(s)” in the **Supplier Select Option**. Next, add the supplier(s) that were adjusted in Step 2.
    ![Select “Specify Supplier(s)” in the Supplier Select Option example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288101/p78_Click_the_Save_button.__0ASelect_Run.__0ARun_the_Withh_ougnuo.png)
12. Click the **Save** button.
13. Select **Run**.
14. Run the Withhold 1099 Report Post.
    ![Withhold 1099 Report Post example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288100/p78_1099_Processing__0Ants_of_the_University_System_of_G_hp1eos.png)
15. Save the `IRS_001.TXT` file.
16. Run Copy B process for selected suppliers that were adjusted in Step 2.
    ![Run Copy B process for selected suppliers, example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288099/p79_Save_the_Copy_B_reports.__0ASend_the_corrected_IRS_0_ngamef.png)
17. Save the Copy B reports.
18. Send the corrected `IRS_001.TXT` correction file to the IRS.
19. After the IRS accepts the correction file, run the Withholding Sent File process again.

## Creating a Replacement File

Once the file is sent to the IRS and the Withholding Sent File process runs, users are finished with the Withholding reporting process unless the IRS rejects the file because of formatting errors. In that case, the IRS may tell the user what is invalid in the file either through contact information user provide or on their internet page, where the file is stored. Make the necessary changes and resubmit the file.

Below are step by step instructions on how to create a complete replacement file.

> [!NOTE]
> Users can create a replacement file only if one original file was sent to the IRS.

1. Click to the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **1099 Reports** link.
6. Select the **Withhold 1099 Report Job** link.
7. Complete the parameters in the 1099 Report Post and the 1099 Report group boxes.
   In the 1099 Report group box, select **Replace** in the Type of File/Return field, and enter the replacement character provided to user by the IRS in the **Replacement Character** field (The replacement character should be left blank if the IRS does not provide a replacement character.)
8. Run the 1099 Report processes. The system generates a new replacement file that user can send to the IRS.
9. Run the Copy B Report Processes again.
10. After sending the replacement file to the IRS and it is accepted, make sure to run the Withholding Sent File process.
11. For replacement files, run the Withholding Sent File process a second time.
