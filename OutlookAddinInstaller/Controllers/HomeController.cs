using Microsoft.Exchange.WebServices.Data;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.Office365.Discovery;
using O365_WebApp_SingleTenant.Utils;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;

namespace OutlookAddinInstaller.Controllers
{
    
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {

            return View();
        }

        [Authorize]
        public async Task<ActionResult> Install()
        {
            var signInUserId = ClaimsPrincipal.Current.FindFirst(ClaimTypes.NameIdentifier).Value;
            var userObjectId = ClaimsPrincipal.Current.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;

            AuthenticationContext authContext = new AuthenticationContext(SettingsHelper.Authority);
            var accessToken = string.Empty;
            try
            {
                var authResult = await authContext.AcquireTokenSilentAsync(SettingsHelper.EwsResourceId, new ClientCredential(SettingsHelper.ClientId, SettingsHelper.AppKey), new UserIdentifier(userObjectId, UserIdentifierType.UniqueId));
                accessToken = authResult.AccessToken;
            } catch(AdalException ex)
            {
                return RedirectToAction("SignIn", "Account");
            }

            

            ExchangeService service = new ExchangeService(ExchangeVersion.Exchange2013_SP1);
            service.HttpHeaders.Add("Authorization", "Bearer " + accessToken);
            service.TraceEnabled = true;
            service.TraceFlags = TraceFlags.All;
            service.Url = new Uri("https://outlook.office365.com/EWS/Exchange.asmx");

            
            try
            {
                
                var apps = service.GetAppManifests();

                using (var fs = System.IO.File.OpenRead(Path.Combine(HostingEnvironment.MapPath("~/App_Data"), "OutlookAddinManifest.xml")))
                {
                    service.InstallApp(fs);
                }
            }
            catch (Exception e)
            {
                var i = e.InnerException as WebException;
                if (i != null)
                {
                    var r = new StreamReader(i.Response.GetResponseStream()).ReadToEnd();
                }
                throw;
            }
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}