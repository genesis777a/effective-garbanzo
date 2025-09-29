import pyximport
pyximport.install(setup_args={"script_args" : ["--verbose"]})
from bbox import compare_bboxes

def main(args):
   boxes1 = args.boxes1
   boxes2 = args.boxes2
   result = compare_bboxes(boxes1, boxes2)
