using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using Owin;
using System;
using System.IdentityModel.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin;
using System.Configuration;
using O365_WebApp_SingleTenant.Utils;

namespace OutlookAddinInstaller
{


    public partial class Startup
    {
        private string ClientId = ConfigurationManager.AppSettings["ida:ClientId"];
        private string Authority = ConfigurationManager.AppSettings["ida:AADInstance"] + "common";
        private string AppKey = ConfigurationManager.AppSettings["ida:ClientSecret"];
        
        public void ConfigureAuth(IAppBuilder app)
        {
            app.SetDefaultSignInAsAuthenticationType(CookieAuthenticationDefaults.AuthenticationType);

            app.UseCookieAuthentication(new CookieAuthenticationOptions());

            app.UseOpenIdConnectAuthentication(
                new OpenIdConnectAuthenticationOptions
                {
                    ClientId = ClientId,
                    Authority = Authority,

                    Notifications = new OpenIdConnectAuthenticationNotifications()
                    {
                    // If there is a code in the OpenID Connect response, redeem it for an access token and refresh token, and store those away.
                    AuthorizationCodeReceived = (context) =>
                        {
                            var code = context.Code;
                            ClientCredential credential = new ClientCredential(ClientId, AppKey);
                            String signInUserId = context.AuthenticationTicket.Identity.FindFirst(ClaimTypes.NameIdentifier).Value;

                            AuthenticationContext authContext = new AuthenticationContext(Authority);
                            AuthenticationResult result = authContext.AcquireTokenByAuthorizationCodeAsync(code, new Uri(HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Path)), credential, SettingsHelper.EwsResourceId).GetAwaiter().GetResult();
                            return Task.FromResult(0);
                        },
                        RedirectToIdentityProvider = (context) =>
                        {
                        // This ensures that the address used for sign in and sign out is picked up dynamically from the request
                        // this allows you to deploy your app (to Azure Web Sites, for example)without having to change settings
                        // Remember that the base URL of the address used here must be provisioned in Azure AD beforehand.
                        string appBaseUrl = context.Request.Scheme + "://" + context.Request.Host + context.Request.PathBase;
                            context.ProtocolMessage.RedirectUri = appBaseUrl + context.Request.Path;
                            context.ProtocolMessage.PostLogoutRedirectUri = appBaseUrl;

                            return Task.FromResult(0);
                        },
                        AuthenticationFailed = (context) =>
                        {
                        // Suppress the exception if you don't want to see the error
                        context.HandleResponse();
                            return Task.FromResult(0);
                        }
                    },
                    TokenValidationParameters = new System.IdentityModel.Tokens.TokenValidationParameters()
                    {
                        ValidateIssuer = false
                    }
                });
        }

    }
}
