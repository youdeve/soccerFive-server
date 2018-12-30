<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{
  /**
   * @Route('/', name="homepage")
   */
  public function homePage(Request $request)
  {
     // $locale = $request->getLocale() ?? 'fr';

     return $this->render('pages/homepage.html.twig', [
        // 'typedPhrases' => Utils::getTypedPhrases($locale)
    ]);
  }

  /**
   * @Route('/reserver', name="book")
   */
  public function book()
  {
     return $this->render('pages/book.html.twig');
  }
}
