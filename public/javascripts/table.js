$(document).ready(function () {
    var tableOptions = {
        dom:
            "<'row'<'col-md-6'B><'col-md-6'f> >" +
            "<'row'<'col-md-12'tr>>" +
            "<'row'<'col-md-6'i><'col-md-6'p>>",
        pagingType: "full_numbers",
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"],
        ],
        buttons: [
            {
                extend: "print",
                title: "",
            },
            {
                extend: "csv",
                title: "",
            },
            {
                extend: "excel",
                title: "",
            },
            {
                extend: "colvis",
            },
        ],
    };

    var exampleTable = $("#exampleTable").DataTable(tableOptions);
    exampleTable.buttons().container().appendTo("#exampleTable_wrapper .col-md-6:eq(0)");
});