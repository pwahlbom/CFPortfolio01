using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CFPortfolio01.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "INDEX";
            ViewBag.Message = "Your Index page.";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "ABOUT";
            ViewBag.Message = "Your About page.";
            return View();
        }

        public ActionResult Exercises()
        {
            ViewBag.Title = "Exercises";
            ViewBag.Message = "Your Exercises page.";
            return View();
        }

        public ActionResult Portfolio()
        {
            ViewBag.Title = "PORTFOLIO";
            ViewBag.Message = "Your Portfolio page.";
            return View();
        }

        public ActionResult Resume()
        {
            ViewBag.Title = "RESUME";
            ViewBag.Message = "Your Resume page.";
            return View();
        }

        public ActionResult Other()
        {
            ViewBag.Title = "OTHER";
            ViewBag.Message = "Your Other page.";
            return View();
        }

    public ActionResult Contact()
        {
            ViewBag.Title = "CONTACT";
            ViewBag.Message = "Your Contact page.";
            return View();
        }
    }
}