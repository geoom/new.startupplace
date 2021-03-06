class Dashboard::UsersController < DashboardController
	include Dashboard::UsersHelper
	
	before_filter :authenticate_user!
	load_and_authorize_resource

  def edit
  	@user = User.find(params[:id])
  end

  def update
  	@user = User.find(params[:id])
  	
  	if params[:user][:password].blank?
		  params[:user].delete(:password)
		  params[:user].delete(:password_confirmation)
		end
		
		@user.update(user_params)

    flash[:notice] = "Successfully updated User."
		redirect_to edit_dashboard_user_path
  end
end
