module ApplicationHelper
  def intellinav
    nav = ''
    if @current_user.present?
      nav += '<li>' + link_to("Edit profile", edit_user_path(@current_user))
      nav += '<li>' + link_to("Log Out #{@current_user.username}", login_path, :method => :delete, :confirm => 'Are you sure?')  + '</li>'
    else
      nav +=  '<li>' + link_to('Sign Up', new_user_path) + '</li>'
      nav +=  '<li>' + link_to('Login', login_path) + '</li>'
    end
    nav
  end
end
