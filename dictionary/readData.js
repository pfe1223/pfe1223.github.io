function read_data() {
  var params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: '17P9toLyJyLlzzYu4CWvD7Qzuwr8vFNVkmQOlB2JjDDc',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'Sheet1',  // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    //valueRenderOption: '',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    //dateTimeRenderOption: '',  // TODO: Update placeholder value.
  };

  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
    //populateSheet(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}
