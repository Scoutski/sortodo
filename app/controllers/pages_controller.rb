class PagesController < ApplicationController
  before_action :authenticate

  def index
    @notebooks = Notebook.where(user_id: @current_user.id)
  end

  def mytags
    @tags = Tag.all
  end

  private
  def authenticate
      @current_user = User.find session[:user_id] if session[:user_id]
      redirect_to login_path unless @current_user
  end
end
