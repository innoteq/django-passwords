// Generated by CoffeeScript 1.7.1
(function() {
  jQuery(function($) {
    var bar_template, render_bar;
    bar_template = '<div class="progress password <%=bar_type%>"><div class="bar" style="width: <%=width%>%;"></div></div><div class="password-validation-error"><%=error_messages%></div>';
    render_bar = _.template(bar_template);
    return $('input[name="password"]').keyup(function() {
      return $.post(window.password_validator_url, {
        password: $(this).val()
      }, function(response) {
        return $('.status_bar').html(render_bar(response));
      });
    });
  });

}).call(this);
