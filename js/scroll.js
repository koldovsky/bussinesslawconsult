$(document).ready(function(){
    $('.go_to').click( function(){ // ����� ���� �� ������ � ������� go_to
	var scroll_el = $(this).attr('href'); // ������� ���������� �������� href, ������ ���� ����������, �.�. �������� ���������� � # ��� .
        if ($(scroll_el).length != 0) { // �������� ������������� �������� ����� �������� ������
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // ��������� ��������� � �������� scroll_el
        }
	    return false; // ��������� ����������� ��������
    });
});