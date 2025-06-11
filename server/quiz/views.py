from django.http import JsonResponse
from .models import Quiz, Question, Answer
from django.views.decorators.csrf import csrf_exempt

def quiz_list(request):
    quizzes = Quiz.objects.all().values('id', 'title')
    return JsonResponse(list(quizzes), safe=False)


def quiz_detail(request, quiz_id):
    quiz = Quiz.objects.filter(id=quiz_id).first()
    if not quiz:
        return JsonResponse({'error': 'Quiz not found'}, status=404)

    questions_data = []
    for question in quiz.questions.all():
        answers = question.answers.all().values('id', 'text')
        questions_data.append({
            'id': question.id,
            'text': question.text,
            'answers': list(answers)
        })

    return JsonResponse({
        'id': quiz.id,
        'title': quiz.title,
        'questions': questions_data
    })
