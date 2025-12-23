# CORRECTIONS AND ADJUSTMENTS OF 1099 ITEMS

After completing a review of the Withholding items, users may find some items need to be adjusted. As mentioned in the previous chapter, for transactions to be reported both the supplier and voucher need to be marked as Withholding.

There are a couple of different ways to make withholding adjustments. Users can adjust Withholding manually or through Withholding Supplier Update or Withholding Invoice Line Update. Before making any manual adjustments, ITS recommends users run the `BOR_AP_1099_ADJUST` query to use as a comparison tool making updates.

## Withholding Invoice Line Update (Update VoucherLine Withholding)

The Withholding Invoice Line Update process is used to update withholding information for a specific voucher or voucher line. Users can change the withholding applicability, entity, type and jurisdiction per voucher line. As with Withholding Supplier Updates, changes do not take effect until the Withholding Update Process runs.

Below are step by step instructions on how to perform Withholding Invoice Line Update.

1. Navigate to the **NavBar** icon.
2. Navigate to the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Maintain** link.
6. Select the **Upd Voucher Line Withholding** link.
7. To complete the process, search by **Supplier SetID** and **Supplier ID**.
   > [!NOTE]
   > For institutions using Share Suppliers, enter `SHARE` in the Supplier SetID field. Enter the Business Unit number (e.g., `53000`) in the Criteria on the next page.
8. On the Withholding Invoice Line Update page, there are four group boxes along the top above the Details section:
   - **Vendor**: summary of the supplier to update
   - **Criteria**: enter the Business Unit and the Beginning and Ending Dates of the Withholding reporting year. Once users click Search in this group box, all vouchers entered for this Supplier during the same reporting year will be listed in the Details section. The selection ‘Clear Updated Withholding’ in the Criteria group box can be used to delete completed update requests from the staging table upon save.
   - **Defaults**: used if updating many lines to withholding (Set All Lines to Wthd) or not withholding (Set All Lines to No Wthd). Users can enter the withholding class combination to apply to updated voucher lines.
   - **Tax Reporting Year**: enter beginning and ending dates of the tax reporting year.
9. The voucher lines available for updating are in the **Details** section. The **Current Withhold** checkbox indicates whether the line is set for Withholding or not.
   Under “New Withhold,” users can set the new Withholding status. If users change a line from Withholding to Not Withholding, the Type, Jurisdiction and Class fields will update to a blank value. If changing a line from Not Withholding to Withholding, users will need to specify the Type, Jurisdiction, and Class.
10. After saving the page, users can go to the **New Withhold Details** tab to show what the new withholding status is, as well as the status of the update.
    > [!NOTE]
    > The status of the update displays as “Pending” until the Withholding Update Process runs.
11. As with Withholding Supplier Updates, changes do not take effect until the Withholding Update Process runs.

## Running Withholding Update Process

The Update Withholdings process must run after making changes using either the Withholding Supplier Update Process or the Withholding Invoice Line Update Process. The Update Withholdings process is also known as `AP_WTHD_UPDT`.

By running this process, the system updates the withholding transactions adjusted and updates the underlying voucher tables as well.

Below are step by step instructions on how to perform Withholding Invoice Line Update.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Maintain** link.
6. Select the **Update Withholdings** link.
7. Find an Existing Value or Add a new Value for the **Run Control ID**.
8. On the Withhold Update Request page, select the appropriate **Process Option** depending on the method used to make the adjustments. If the Supplier Withholding Update method was used, select **Process Only Supplier Updates**. If the Voucher Line Withholding Update method was used, select **Process Only Voucher Lines**.
   ![Withhold Update Request page, select the appropriate Process Option example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288119/p51_Withholding_Update_method_was_used__select_Process_scpqcu.png)
9. After the process completes successfully, return to the Update Supplier Withholdings or Update Voucher Line Withholdings pages to confirm updates processed. On the New Withhold Details tab for both pages, the Criteria should show “Updated” for those items changed.
   > [!NOTE] > **Note 1**: This process may take several minutes to run. Users cannot select Business Unit on the Run Control Page. When this process runs it updates for all business units.
   >
   > **Note 2**: Although users can run Withhold Update Request manually if needed, ITS recommends users allow scheduled instances to process the updates. This will help prevent multiple instances from running, an issue that may adversely affect performance.
   >
   > During the month of January, ITS will schedule this process to run several times each day. Only one instance of this process will run at one time. If users run a second instance while the first one is running, the second process shows a status of ‘blocked’ in the process monitor. Once the first instance is completed, the next one should begin processing.

## Manual Adjustments

### Adjust Withholding

Users can also adjust withholding manually, if needed. This process is for manually adjusting posted withholding transactions by Supplier or adding withholding entries from a legacy or third-party system. Adjustments for any transactions entered via journal entry must be done manually.

Whenever possible, ITS advises users to make withholding adjustments through Withholding Supplier Update or Withholding Invoice Line Update. These types of adjustments update the underlying Withholding tables, unlike the manual adjustments.

Below are step by step instructions on how to adjust withholding manually.

1. Click the **NavBar** icon.
2. Click the **Menu** icon.
3. Select the **Suppliers** link.
4. Select the **1099/Global Withholding** link.
5. Select the **Maintain** link.
6. Select the **Adjust Withholding** link.
7. Enter the **Supplier SetID** and the **Supplier ID** for the supplier that requires a manual adjustment.
   > [!TIP]
   > For institutions using SHARE Suppliers, enter `SHARE` in the Supplier SetID field.
8. Click **Search**.
9. On the Withhold Adjustments page, search for any adjustments previously made. To do this, enter any of the following in the Search Criteria:
   - **Business Unit** (required)
   - **Entity**: `IRS`
   - **Type**: `1099M` or `1099N` (DO NOT CHOOSE ANY OTHER TYPE)
   - **Jurisdiction**: `FED`
   - **Start Date and End Date**: beginning and ending of Withholding reporting calendar year
     In the Business Unit field, enter the Business Unit number (e.g., `36000`).
10. After hitting the **Search** button, any adjustments made will be listed. If there are none, users can begin entering adjustments on Line 1.
    If adjustments are retrieved in the Search results, make sure there is no existing line for the Withholding Type/Class combination.
    If lines do exist with the same Type/Class combination, users can either modify the existing line by the amount of the necessary adjustment or insert a new adjustment line.
11. When entering a new adjustment, enter the following for each line on the **Main Information** tab:
    - **Business Unit**
    - **Entity**: `IRS`
    - **Type**: `1099M` or `1099N` (DO NOT CHOOSE ANY OTHER TYPE)
    - **Jurisdiction**: `FED`
    - **Class**
    - **Rule**
      ![Withhold Adjustments page, enter Main Information example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288118/p54_1099_Processing__0AUser_Guide_z2agse.png)
12. On the **Transaction Info** tab enter amounts and dates. Under “Basis Amt,” enter the amount on which the Withholding is calculated. This is the basis amount reported to the Withholding entity for this payment and is typically the gross amount of the voucher.
    ![Withhold Adjustments page, enter Main Transaction Info example](https://res.cloudinary.com/ddvcsl4ya/image/upload/v1766288116/p55_The_Liability_Amount_displays_the_amount_of_backup_x4cynu.png)
13. The **Liability Amount** displays the amount of backup withholding retained to remit to the withholding entity.
    The **Paid Amount** displays the amount of the withholding liability paid to the withholding entity.
    > [!NOTE]
    > Since the GeorgiaFIRST model is not currently using actual withholding for payments these two fields should always be zero.
14. For **Payment Date**, all adjustments should have a Payment date of December 31 of the Withholding reporting year.
15. In addition, the **Declaration Date** displays the date on which the withholding is declared. The Declaration Date should be the same date that we entered for Payment Date, which is December 31 of the Withholding reporting year.
16. On the **Adjustment Reason** tab, there is space available for users to indicate why they made an adjustment. The **Creation Date** is generated by the system and reflects the date the adjustment was entered. The **User ID** refers to the person who made the adjustment. For the **Description**, include a reference as to why the adjustment was made.
    > [!NOTE]
    > Users may sometimes notice a second User ID on this page that is not part of their institution. This additional User ID may display because the withholding update process runs for all institutions every time the process is started. The User ID displayed on the Adjustment Reason tab is the last system user to run the process.
17. After saving the manual adjustment, each transaction row entered is then added to the Withholding Transaction table (`WTHD_TRXN_TBL`). It is also added to or subtracted from the totals already in the Withholding Transaction table.
    Again, it is a good idea to run the `BOR_AP_1099_ADJUST` query before and after performing manual adjustments to ensure adjustments were entered correctly.

## After Making Withholding Adjustments

After making all necessary adjustments, review the 1099 items again as previously discussed in **Chapter 5: Review 1099 Items**. Review, make corrections and then re-review until all necessary updates and corrections are made.
